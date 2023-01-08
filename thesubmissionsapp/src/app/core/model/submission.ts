import { State } from './state';

export interface Submission {
  id: string;
  title: string;
  patient_id: string;
  doctor_id: string;
  state: State;
  symptoms: string;
  prescriptions: string;
  timestamps: Date;
}
