import { Model, QueryFilter, QueryOptions, Types } from "mongoose";

export abstract class AbstractRepo<T> {
  constructor(private readonly model: Model<T>) {}

  async craete(data: T) {
    return this.model.create(data);
  }

  async update(filter:QueryFilter<T>, newData: Partial<T>, options:QueryOptions<T>) {
    return this.model.findOneAndUpdate(filter, newData, options)
  }

  async delete(filter:QueryFilter<T>){
    return this.model.deleteOne(filter)
  }
}
