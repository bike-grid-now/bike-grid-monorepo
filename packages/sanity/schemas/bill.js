export default {
	name: "bill",
	type: "document",
	title: "Bills",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Bill Title",
			description: "Title of bill",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "slipLink",
			type: "string",
			title: "Witness Slip Link",
			description: "Link to witness slip page",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "billLink",
			type: "string",
			title: "Bill Link",
			description: "Link to bill info",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "summary",
			type: "string",
			description: "Short passage of what the bill entails and why people should be a proponent or opponent",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "position",
			type: "string",
			initialValue: "proponent",
			description: "Should we support or not support the passing of this bill?",
			options: {
				list: [
					{ title: "Proponent", value: "proponent" },
					{ title: "Opponent", value: "opponent" },
				],
			},
			validation: (Rule) => Rule.required(),
		},

	],
};