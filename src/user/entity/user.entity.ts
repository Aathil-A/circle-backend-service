import { Enquiry } from '../../enquiry/entity/enquiry.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  firebaseId?: string;

  @OneToMany(() => Enquiry, (enquiry) => enquiry.user)
  enquiry!: Enquiry[];
}
