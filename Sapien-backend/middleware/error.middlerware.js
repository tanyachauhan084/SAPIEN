import React from 'react'

const errorMiddleware = (err, req, res,next) => {
  const status= err.statusCode || 500;
  const message= err.message|| "something wnet wrong";

  res.status(status)
  .json({
    success:false,
    message: message,
  })
}

export default errorMiddleware