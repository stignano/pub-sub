export type MessageContents = object

export type MessageMetadata = {
  topic: string
  timestamp: Date
}

export type Message = MessageContents & MessageMetadata

export type Broker = {
  topics: Array<Topic>
}

export type Topic = {
  name: string
  publishers: Array<Publisher>
  subscribers: Array<Subscriber>
  pending: Array<Message>
}

export type Publisher = {
  id: string
}

export type Subscriber = {
  id: string
  endpoint: string
  filter?: FilterPolicy
}

export type FilterPolicy = object

export type Subscribe = (
  params: SubscribeParams,
  callback?: PublishCallback
) => Promise<boolean>

export type SubscribeParams = {
  topic: string
  endpoint: string
  filterPolicy?: FilterPolicy
}

export type Publish = <TParams extends PublishParams>(
  params: TParams,
  callback?: PublishCallback<TParams["message"]>
) => Promise<PublishResponse<TParams["message"]>>

export type PublishParams = {
  topic: string
  message: object
}

export type PublishCallback<T = unknown> = (
  err?: PublishError,
  data?: PublishResponse<T>
) => any

export type PublishResponse<TMessage> = {
  message: TMessage & MessageMetadata
}

export type PublishError = {
  message: string
}

export type GeneratePublisherResponse = <TParams extends PublishParams>(
  params: TParams
) => PublishResponse<TParams["message"]>
