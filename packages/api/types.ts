export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Path = {
   __typename?: 'Path';
  id: Scalars['String'];
  name: Scalars['String'];
  icon: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['DateTime'];
};


export type UserPreferences = {
   __typename?: 'UserPreferences';
  id: Scalars['String'];
  userId: Scalars['String'];
  practiceGoal: Scalars['Float'];
  why: Scalars['String'];
  codingAbility: Scalars['Float'];
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  profileImage: Scalars['String'];
  userPreferences?: Maybe<UserPreferences>;
  createdAt: Scalars['DateTime'];
};

export type LoginOutput = {
   __typename?: 'LoginOutput';
  accessToken: Scalars['String'];
};

export type Friend = {
   __typename?: 'Friend';
  id: Scalars['String'];
  user1Id: Scalars['String'];
  user2Id: Scalars['String'];
  requested: Scalars['DateTime'];
  status: Scalars['String'];
  initiator: Scalars['String'];
  since?: Maybe<Scalars['DateTime']>;
  user1: User;
  user2: User;
};

export type FriendOutput = {
   __typename?: 'FriendOutput';
  id: Scalars['String'];
  user1Id: Scalars['String'];
  user2Id: Scalars['String'];
  requested: Scalars['DateTime'];
  status: Scalars['String'];
  initiator: Scalars['String'];
  since?: Maybe<Scalars['DateTime']>;
};

export type Query = {
   __typename?: 'Query';
  users: Array<User>;
  me: User;
  verifyToken: Scalars['Boolean'];
  paths: Array<Path>;
  getPathByName: Path;
  getUserFriends: Array<Friend>;
};


export type QueryVerifyTokenArgs = {
  accessToken: Scalars['String'];
};


export type QueryGetPathByNameArgs = {
  name: Scalars['String'];
};


export type QueryGetUserFriendsArgs = {
  userId: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  createUser: User;
  updatePreferences: UserPreferences;
  login: LoginOutput;
  createPath: Path;
  joinPath: Scalars['Boolean'];
  createFriend: FriendOutput;
  confirmRejectRequest: Friend;
  deleteFriend: Scalars['Boolean'];
};


export type MutationCreateUserArgs = {
  user: UserInput;
};


export type MutationUpdatePreferencesArgs = {
  preferences: UserPreferencesInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationCreatePathArgs = {
  path: PathInput;
};


export type MutationJoinPathArgs = {
  pathId: Scalars['String'];
};


export type MutationCreateFriendArgs = {
  friendInput: CreateFriendInput;
};


export type MutationConfirmRejectRequestArgs = {
  response: Scalars['String'];
  id: Scalars['String'];
};


export type MutationDeleteFriendArgs = {
  friendId: Scalars['String'];
};

export type UserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserPreferencesInput = {
  practiceGoal?: Maybe<Scalars['Float']>;
  why?: Maybe<Scalars['String']>;
  codingAbility?: Maybe<Scalars['Float']>;
};

export type PathInput = {
  name: Scalars['String'];
  icon: Scalars['String'];
  description: Scalars['String'];
};

export type CreateFriendInput = {
  fromId: Scalars['String'];
  toId: Scalars['String'];
};
