import React, { useState, useMemo } from 'react';
import api from '../../service/api';

import camera from '../../assets/camera.svg';

import './index.css';

export default function New({ history }) {
    const [thumbnail, setThumbnail] = useState(null);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [content, setContent] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    async function handleSubmit(event) {
        event.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('title', title);
        data.append('tags', tags);
        data.append('content', content);

        const response = await api.post("/spots", data, {
            headers: { user_id }
        })

        console.log(response);

        history.push('/dashboard');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? 'has-thumbnail' : ''}
            >
                <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                <img src={camera} alt="Select img" />
            </label>

            <label htmlFor="company">TÍTULO *</label>
            <input
                id="title"
                placeholder="Título do post"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />
            <label htmlFor="techs">TAGS * <span>(separadas por vírgula)</span></label>
            <input
                id="tags"
                placeholder="Quais são as tags?"
                value={tags}
                onChange={event => setTags(event.target.value)}
            />
            <label htmlFor="techs">TEXTO</label>
            <textarea
                id="tags"
                placeholder="Conteúdo do post..."
                value={content}
                onChange={event => setContent(event.target.value)}
            />
            <button type="submit" className="btn">Cadastrar</button>
        </form>
    )
}