import {fork, all} from 'redux-saga/effects';
import users from './users';

export default function* watchers() {
    yield all<object>([
        users,
    ].map(fork));
}
