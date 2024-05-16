import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { UserScriptCreateNestedManyWithoutUserInput } from '../user-script/user-script-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Date, {nullable:true})
    lastLogin?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserScriptCreateNestedManyWithoutUserInput, {nullable:true})
    scripts?: UserScriptCreateNestedManyWithoutUserInput;
}
