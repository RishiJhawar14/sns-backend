/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { AuthPayload, IAuthDocument } from './../features/auth/interfaces/auth.interface';
import { Response } from 'express';

export const authMockRequest = (sessionData: IJWT, body: IAuthMock, currentUser?: AuthPayload | null, params?: any) => ({
  session: sessionData,
  body,
  params,
  currentUser
});

export const authMockResponse = (): Response => {
  const res: Response = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

export interface IJWT {
  jwt?: string;
}

export interface IAuthMock {
  _id?: string;
  username?: string;
  email?: string;
  uId?: string;
  password?: string;
  avatarColor?: string;
  avatarImage?: string;
  createdAt?: Date | string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
  quote?: string;
  work?: string;
  school?: string;
  location?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  messages?: boolean;
  reactions?: boolean;
  comments?: boolean;
  follows?: boolean;
}

export const authUserPayload: AuthPayload = {
  userId: '6489e54853340db968a1e707',
  uId: '510600221444',
  username: 'Admin',
  email: 'admin@test.com',
  avatarColor: 'purple',
  iat: 12345
};

export const authMock = {
  _id: '6489e54853340db968a1e708',
  uId: '510600221444',
  username: 'Admin',
  email: 'admin@test.com',
  avatarColor: 'purple',
  createdAt: '2023-06-14T16:05:28.924+00:00',
  save: () => {},
  comparePassword: () => false
} as unknown as IAuthDocument;

export const signUpMockData = {
  _id: '6489e54853340db968a1e709',
  uId: '510600221477',
  username: 'Admin',
  email: 'admin@test.com',
  avatarColor: 'purple',
  password: 'admin',
  birthDay: {},
  postCount: 0,
  gender: '',
  quotes: '',
  about: '',
  relationships: '',
  blocked: [],
  blockedBy: [],
  bgImageVersion: '',
  bgImageId: '',
  work: [],
  school: [],
  placesLived: [],
  createdAt: new Date(),
  followersCount: 0,
  followingCount: 0,
  notifications: { messages: true, reactions: true, comments: true, follows: true },
  profilePicture: ''
};
