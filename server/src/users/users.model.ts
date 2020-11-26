import { prop, modelOptions } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    versionKey: false,
    timestamps: true,
    id: false,
  },
})
export default class User {
  @prop({ type: String, required: [true, 'First Name is required'] })
  firstName: string;

  @prop({ type: String, required: [true, 'Last Name is required'] })
  lastName: string;
}
