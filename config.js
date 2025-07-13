const TOKEN_ADDRESS = "0x6cfD8Fe423F20F94825b5edB1E94068fBea19dC9";
const TOKEN_DECIMALS = 18;
const TOKEN_ABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
];
