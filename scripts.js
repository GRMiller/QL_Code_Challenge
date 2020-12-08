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

// Display data
function displayTable(data) {
  
	const html = data.map((data) => {
		const month = data.month;
		const sales = data.sales;
		const person = data.person;

		return `
			<tr>
				<td>${month}</td>
				<td>${sales}</td>
				<td>${person}</td>
			</tr>
			`;
	}).join('');
	table.innerHTML = html;
}
displayTable(data);

/**
 * ONE
 *
 * When checkbox is checked, filter table to only show corresponding rows
 * Q1=Jan-Mar, Q2=Apr-Jun, Q3=Jul-Sep, Q4=Oct-Dev
 */




/**
 * TWO
 *
 * Sort rows by Sales
 * 1st click = lowest to highest. 2nd click = highest to lowest. 3rd click = Return to chronological
 */



/**
 * THREE
 *
 * Sort rows by Person
 * 1st click = alphabetical. 2nd click = reverse aplhabetical (not in instructions though?). 3rd click = Return to chronological
 */
