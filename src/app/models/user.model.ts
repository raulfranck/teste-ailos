import { Account } from "./account.model";
import { AccountType } from "./account.type.model";


export interface User {
	cpf: string;
	name: string;
	status: AccountType;
	accounts?: Array<Account>;
}
