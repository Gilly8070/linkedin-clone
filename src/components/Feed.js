import React, { useState, useEffect } from 'react'
import '../styles/Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@material-ui/icons/Image';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from '../components/Post';
// import {auth} from '../fire'
import { db } from '../firebase';
import firebase from 'firebase/compat';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    const user = useSelector(selectUser);    

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, [])

    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('');
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOptions Icon={ImageIcon} title='Photo' color='#70b5f9' />
                    <InputOptions Icon={SubscriptionsIcon} title='Video' color='#e7a33e' />
                    <InputOptions Icon={EventNoteIcon} title='Event' color='#c0cbcd' />
                    <InputOptions Icon={CalendarViewDayIcon} title='Write article' color='#7fc15e' />
                </div>
            </div>
                <FlipMove>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
                </FlipMove>
            {/* <Post name='Sonny Sangha' description='This is a test' message='WOW this worked' /> */}
        </div>
    )
}

export default Feed
