export interface CreateFeedingInput {
  babyId: number;
  type: 'breast' | 'formula' | 'mixed';
  amountMl?: number;
  durationMin?: number;
  fedAt: string;
}