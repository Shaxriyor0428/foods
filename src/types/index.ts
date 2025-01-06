export interface IUserForm {
  username: string;
  password: string;
}

export interface IProduct {
  id: number;
  name: string;
  rating: number;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  caloriesPerServing: number;
  difficulty: string;
  cuisine: string;
}
