"use client";
import React, { createElement } from "react";

const Form = ({
  children,
  onSubmit,
  defaultValue,
  handleSubmit,
  register,
  ...rest
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} {...rest}>
        <div>
          {Array.isArray(children)
            ? children.map((child) => {
                return child.props.name
                  ? createElement(child.type, {
                      ...{
                        ...child.props,
                        register,
                        key: child.props.name,
                      },
                    })
                  : child;
              })
            : children}
        </div>
      </form>
    </div>
  );
};

export default Form;
