enum Type {
	NOUN = "名词",
	VERB = "动词",
	ADJ = "形容词",
	PREP = "介词",
	PRON = "代词",
}

export const getType = (type: string) => {
	switch (type) {
		case "NOUN":
			return Type.NOUN
		case "VERB":
			return Type.VERB
		case "ADJ":
			return Type.ADJ
		case "PREP":
			return Type.PREP
		case "PRON":
			return Type.PRON
		default:
			return type
	}
}
