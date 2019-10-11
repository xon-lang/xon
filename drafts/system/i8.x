import './types': inum, unum, 

class i8:
	...byte

	min = -127
	max = 128

	operator +: i8 a, i8 b
		#ts{ $ = `${a.name} ${b.name}` }

