import React, { useEffect } from 'react';
import { MessageIcon, SendIcon } from './Icons';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyC8GUlfG9KCmLuU8xriCyrNoQrEiMulRRY',
	authDomain: 'guest-book-2cbe7.firebaseapp.com',
	databaseURL: 'https://guest-book-2cbe7.firebaseio.com',
	projectId: 'guest-book-2cbe7',
	storageBucket: 'guest-book-2cbe7.appspot.com',
	messagingSenderId: '905747499608',
	appId: '1:905747499608:web:ce720e7c4e7cd055f9d82d',
};

export const GuestBook = () => {
	const [messages, setMessages] = React.useState([]);

	const [
		showNewMessageDialog,
		setShowNewMessageDialog,
	] = React.useState(false);

	const [newFrom, setNewFrom] = React.useState('');
	const [newMessage, setNewMessage] = React.useState('');

	useEffect(() => {
		firebase.initializeApp(firebaseConfig);

		const firestore = firebase.firestore();
		firestore
			.collection('Messages')
			.orderBy('date', 'desc')
			.limit(100)
			.onSnapshot((querySnapshot) => {
				setMessages(
					querySnapshot.docs.map((doc) => {
						const message = doc.data();
						return {
							...message,
							date: message.date.toDate(),
						};
					}),
				);
			});
	}, []);

	return (
		<div className="guest-book-section" id="guest-book">
			<div className="guest-book-subsection-1">
				<div className="guest-book-subsection-2">
					<button
						className="guest-book-h2"
						onClick={(event) =>
							setShowNewMessageDialog(true)
						}
					>
						<MessageIcon />
						Say Hello
					</button>
				</div>
				<ul className="messages-container">
					{messages.map((message, i) => (
						<li className="guestbook-message" key={i}>
							<p className="guestbook-message-message">
								{message.message}
							</p>
							<div className="guestbook-message-subsection">
								<span className="guestbook-message-date">
									{message.date.toLocaleString()}
								</span>
								<span className="guestbook-message-name">
									-{message.name}
								</span>
							</div>
						</li>
					))}
				</ul>
			</div>
			{showNewMessageDialog && (
				<form
					className="guest-book-form"
					onSubmit={(event) => {
						event.preventDefault();
						firebase
							.firestore()
							.collection('Messages')
							.add({
								name: newFrom,
								date: new Date(),
								message: newMessage,
							})
							.then(function (docRef) {
								console.log(
									'Document written with ID: ',
									docRef.id,
								);
							})
							.catch(function (error) {
								console.error(
									'Error adding document: ',
									error,
								);
							});
						setShowNewMessageDialog(false);
						setNewFrom('');
						setNewMessage('');
					}}
				>
					<div className="guest-book-form-section">
						<label className="guest-book-form-from-label">
							From
						</label>
						<input
							className="form-input-from"
							type="text"
							value={newFrom}
							autoFocus={true}
							onChange={(event) =>
								setNewFrom(event.target.value)
							}
						/>
						<label className="guest-book-form-message-label">
							Message
						</label>
						<textarea
							className="form-input-message"
							type="text"
							value={newMessage}
							onChange={(event) =>
								setNewMessage(event.target.value)
							}
						></textarea>
						<div className="form-buttons">
							<button
								className="form-cancel-button"
								onClick={(event) => {
									setShowNewMessageDialog(false);
									setNewFrom('');
									setNewMessage('');
								}}
							>
								Cancel
							</button>
							<button
								className="form-submit-button"
								type="submit"
							>
								<SendIcon />
								Send
							</button>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

/*
function a() {
}

messages.map(function() {})

messages.map() => {}

const a = function() {}
const b = () => {}
*/
