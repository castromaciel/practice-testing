export interface FormProps {
  username: string
  password: string
}

// callEndpoint

export interface Location {
  name: string;
  url: string;
}

export interface ApiResponse {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
