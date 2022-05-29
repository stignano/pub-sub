import { GeneratePublisherResponse, Publish, PublishParams } from "./types"

const publish: Publish = async (params, callback) => {
  try {
    console.log(`publishing message to ${params.topic}`)
    const res = generateSuccessResponse(params)
    if (callback) callback(undefined, res)
    return res
  } catch (e) {
    const error = {
      message: "Some error message",
    }
    if (callback) {
      callback(error)
    }
    throw new Error("Publish unsuccessful")
  }
}

const generateSuccessResponse: GeneratePublisherResponse = (params) => {
  const { topic, message } = params
  return {
    message: {
      ...message,
      timestamp: new Date(Date.now()),
      topic: topic,
    },
  }
}
