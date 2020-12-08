// Make our array of data
const data = [
	{ month: 'January', sales: 50000, person: 'Angela' },
	{ month: 'February', sales: 10000, person: 'Roberto' },
	{ month: 'March', sales: 85000, person: 'Maria' }, 
	{ month: 'April', sales: 56000, person: 'Stacy' },
	{ month: 'May', sales: 68000, person: 'William' },
	{ month: 'June', sales: 32000, person: 'Darrel' },
	{ month: 'July', sales: 21000, person: 'Angela' },
	{ month: 'August', sales: 18000, person: 'Angela' },
	{ month: 'September', sales: 118000, person: 'Maria' }, 
	{ month: 'October', sales: 52000, person: 'Stacy' },
	{ month: 'November', sales: 87000, person: 'Angela' },
	{ month: 'December', sales: 121000, person: 'William' }
];
console.table(data);
// Get variables we'll need
const table = document.getElementById('table-body');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const salesHeader = document.getElementById('sales');
const personHeader = document.getElementById('person');



