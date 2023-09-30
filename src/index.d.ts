export interface TeanslateResult {
	code: number
	message?: any
	data: Data[]
}

interface Data {
	word: string
	variant: Variant
	phonetic: Phonetic
	wordFrequency: number
	definition: Definition2[]
	translations: Translation[]
	mastered: boolean
	stared: boolean
	sentences: any[]
	needRevise: boolean
}

interface Translation {
	target: string
	pos: string
	score: number
}

interface Definition2 {
	partOfSpeech: string
	language: string
	definitions: Definition[]
	synonyms: any[]
	antonyms: any[]
}

interface Definition {
	definition: string
	examples: any[]
}

interface Phonetic {
	us: string[]
	uk: string[]
}

interface Variant {
	hovers: string[]
	hovered: string[]
	hovering: string[]
}
