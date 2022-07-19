import React, { ReactNode } from 'react';
import { Alert } from 'react-bootstrap';

type messageTyeps = {
  variant: string;
  children: ReactNode;
};

const Message = ({ variant, children }: messageTyeps) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info',
};

export default Message;
