export interface CreateBabyInput {
  name: string;
  birthDate: string;
  gender?: 'male' | 'female';
}