import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';

import { CMBaseEntity } from '../lib/Base.entity';
import { PathUser } from '../PathUser/PathUser.entity';
import { UserPreferences } from '../UserPreferences/UserPreferences.entity';
// import { Friends } from '../Friends/Friends.entity';
// import { FriendRequests } from '../FriendRequests/FriendRequests.entity';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  profileImage: string;

  @Field(() => UserPreferences, { nullable: true })
  userPreferences?: UserPreferences;

  @Field()
  createdAt: Date;
}

@Entity('user')
@Unique('Email', ['email'])
export class UserWithPassword extends CMBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  profileImage: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => PathUser, pathUser => pathUser.user)
  pathUser: PathUser[];

  @OneToOne(() => UserPreferences)
  userPreferences: UserPreferences;

  // @OneToMany(() => Friends, user1 => user1.user1, { nullable: true })
  // user1: Friends[];

  // @OneToMany(() => Friends, user2 => user2.user2, { nullable: true })
  // user2: Friends[];

  // @OneToMany(() => FriendRequests, friendRequestsTo => friendRequestsTo.toUser, { nullable: true })
  // friendRequestsTo: FriendRequests[];

  // @OneToMany(() => FriendRequests,
  //   friendRequestsFrom => friendRequestsFrom.fromUser, { nullable: true })
  // friendRequestsFrom: FriendRequests[];
}

@InputType()
export class UserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
