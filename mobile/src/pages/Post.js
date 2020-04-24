import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, Text} from 'react-native';

import api from '../services/api';

export default function Post({navigation}) {
  const [post, setPost] = useState({});

  const id = navigation.getParam('id');

  useEffect(() => {
    async function getPost() {
      const response = await api.get(`/posts/${id}`);
      setPost(response);
    }
    getPost();
  }, []);

  function handleCancel() {
    navigation.navigate('List');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Post : {post.title} </Text>
      <TouchableOpacity
        onPress={handleCancel}
        style={[styles.button, styles.cancelButton]}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginTop: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },

  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  cancelButton: {
    backgroundColor: '#ccc',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
