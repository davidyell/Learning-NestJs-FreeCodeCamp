import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Bookmark } from '../bookmark/bookmark.entity';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Unique('unique-email', ['email'])
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  firstName: string | null;

  @Column({ nullable: true })
  lastname: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Bookmark, (bookmark) => bookmark.user)
  bookmarks: Bookmark[];
}
