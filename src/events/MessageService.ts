import { Subject, Observable } from 'rxjs';
import { Message } from '../components/Types/GeneralTypes';

const subject = new Subject<Message>();

export function sendMessage(name: string, signal = true, data?: {}) {
  subject.next({
    name,
    signal,
    data,
  });
}

export function clearMessages() {
  subject.next();
}

export function receiveMessage(): Observable<Message> {
  return subject.asObservable();
}

export function newMessageId() {
  return Math.random();
}

export function newId() {
  return Math.random();
}

export function httpHandleRequest(
  messageId: any,
  action: string,
  reference: string
) {
  sendMessage('notification', true, {
    id: messageId,
    type: 'running',
    message: `${action} ${reference ? `(${reference})` : ''} - In progress`,
  });
}

export function httpHandleResponse(
  messageId: any,
  response: any,
  action: string,
  reference: string
) {
  if (response.status === 200) {
    sendMessage('notification', true, {
      id: messageId,
      type: 'success',
      message: `${action} ${reference ? `(${reference})` : ''} - Success`,
      duration: 3000,
    });
    return true;
  } else {
    sendMessage('notification', true, {
      id: messageId,
      type: 'failure',
      message: `${action} ${
        reference ? `(${reference})` : ''
      } - Failed with error ${response.status}`,
      duration: 3000,
    });
    return false;
  }
}

export function httpHandleError(
  messageId: any,
  error: any,
  action: string,
  reference: string
) {
  sendMessage('notification', true, {
    id: messageId,
    type: 'failure',
    message: `${action} ${
      reference ? `(${reference})` : ''
    } - Failed with ${error}`,
  });
  return false;
}
