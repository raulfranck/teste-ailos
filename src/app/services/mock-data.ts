import { User } from "../models/user.model";

export const MOCK_DATA: Array<User> = [
	{
		cpf: '22222222222', name: 'Teste Nome 1', status: {id: 1, name: 'Regular'}, 
		accounts: [
			{number: '222222-2', type: {id: 1, name: 'CC'}, company: 'Cooperativa Vicredi'},
			{number: '222222-2', type: {id: 2, name: 'Conta aplicação'}, company: 'Cooperativa Vicredi'},
		]
	},
	{
		cpf: '11111111111', name: 'Teste Nome 2', status: {id: 1, name: 'Irregular'}, 
		accounts: [
			{number: '1111111-1', type: {id: 1, name: 'CC'}, company: 'Cooperativa Vicredi'},
			{number: '1111111-1', type: {id: 2, name: 'Conta aplicação'}, company: 'Cooperativa Vicredi'},
		]
	}
];
