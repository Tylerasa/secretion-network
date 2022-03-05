import React from "react";

export const ShowContext = React.createContext({
  showComments: false,
  toggleComments: () => {}
});
