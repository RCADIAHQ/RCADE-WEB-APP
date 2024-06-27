const OWNABLE_ABI = [
	"event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
	"function owner() public view returns (address)",
	"function renounceOwnership()",
	"function transferOwnership(address owner)",
];

export const ERC1155_ABI = [
	// ERC1155
	"event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)",
	"event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] balances)",
	"event ApprovalForAll(address indexed account, address indexed operator, bool approved)",

	"function balanceOf(address owner, uint256 id) external view returns (uint256)",
	"function balanceOfBatch(address[] owners, uint256[] ids) external view returns (uint256[] memory)",
	"function setApprovalForAll(address operator, bool approved) external",
	"function isApprovedForAll(address account, address operator) external view returns (bool)",
	"function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes calldata data) external",
	"function safeBatchTransferFrom(address from, address to, uint256[] calldata ids, uint256[] calldata amounts, bytes calldata data) external",

	// Burnable
	"function burn(address account, uint256 id, uint256 value) external",
	"function burnBatch(address account, uint256[] ids, uint256[] values) external",

	// Supply
	"function totalSupply(uint256 id) external view returns (uint256)",
	"function exists(uint256 id) external view returns (bool)",

	// Metadata
	"function uri(uint256 id) external view returns (string memory)",

	// TRN
	"event TokenCreated(uint32 indexed serialNumber)",
	"event MaxSupplyUpdated(uint128 indexed maxSupply)",
	"event BaseURIUpdated(string baseURI)",

	"function createToken(bytes name, uint128 initialIssuance, uint128 maxIssuance, address tokenOwner) external returns (uint32)",
	"function mint(address owner, uint256 id, uint256 amount) external",
	"function mintBatch(address owner, uint256[] ids, uint256[] amounts) external",
	"function setMaxSupply(uint256 id, uint32 maxSupply) external",
	"function setBaseURI(bytes baseURI) external",

	// Ownable
	...OWNABLE_ABI,
];