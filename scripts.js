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
function checkCheckboxes() {
	// Pre-filter data by quarters
	const q1Data = data.filter(quarter => quarter.month === 'January' || quarter.month === 'February' || quarter.month === 'March');
	const q2Data = data.filter(quarter => quarter.month === 'April' || quarter.month === 'May' || quarter.month === 'June');
	const q3Data = data.filter(quarter => quarter.month === 'July' || quarter.month === 'August' || quarter.month === 'September');
	const q4Data = data.filter(quarter => quarter.month === 'October' || quarter.month === 'November' || quarter.month === 'December');

	// Create array for data to display and var to count checks
	let displayData = [];
	let numberOfChecks = 0;

	// Loop through boxes, if checked add corresponding array to displayData. keep track of how many boxes are checked
	checkboxes.forEach(checkbox => {
		// Only act when a box is checked
		if (checkbox.checked) {
			// Check IDs
			if (checkbox.id === 'q1') {
				displayData.push.apply(displayData, q1Data);
				numberOfChecks++;
			} else if (checkbox.id === 'q2') {
				displayData.push.apply(displayData, q2Data);
				numberOfChecks++;
			} else if (checkbox.id === 'q3') {
				displayData.push.apply(displayData, q3Data);
				numberOfChecks++;
			} else if (checkbox.id === 'q4') {
				displayData.push.apply(displayData, q4Data);
				numberOfChecks++;
			}
		}    
	});
      
	if (numberOfChecks === 0) {
		displayData = data;
	}
	console.table(displayData);
	displayTable(displayData);
}

// Listen for change, call checkCheckboxes on change
checkboxes.forEach(checkbox => checkbox.addEventListener('change', checkCheckboxes));




/**
 * TWO
 *
 * Sort rows by Sales
 * 1st click = lowest to highest. 2nd click = highest to lowest. 3rd click = Return to chronological
 */
function sortSales() {
  
	// Copy data array into display up top, to sort in conditionals
	let displayData = [...data];
	console.log(this.classList);

	// Check class and alter/sort correspondingly
	if (this.classList.length === 0) {
		displayData.sort((a,b) => a.sales > b.sales ? 1 : -1);
		this.classList.add('active');
		this.classList.add('ascending');
		displayTable(displayData);
	} else if (this.classList.contains('ascending')) {
		displayData.sort((a,b) => a.sales > b.sales ? -1 : 1);
		this.classList.remove('ascending');
		this.classList.add('descending');
		displayTable(displayData);
	} else if (this.classList.contains('descending')) {
		displayData = [...data];
		this.classList.remove('active');
		this.classList.remove('descending');
		displayTable(displayData);
	}
}

// Add event listener
salesHeader.addEventListener('click', sortSales);



/**
 * THREE
 *
 * Sort rows by Person
 * 1st click = alphabetical. 2nd click = reverse aplhabetical (not in instructions though?). 3rd click = Return to chronological
 */
function sortPeople() {
  
	// Copy data array into display up top, to sort in conditionals
	let displayData = [...data];
	console.log(this.classList);

	// Check class and alter/sort correspondingly
	if (this.classList.length === 0) {
		displayData.sort((a,b) => a.person > b.person ? 1 : -1);
		this.classList.add('active');
		this.classList.add('ascending');
		displayTable(displayData);
	} else if (this.classList.contains('ascending')) {
		displayData.sort((a,b) => a.person > b.person ? -1 : 1);
		this.classList.remove('ascending');
		this.classList.add('descending');
		displayTable(displayData);
	} else if (this.classList.contains('descending')) {
		displayData = [...data];
		this.classList.remove('active');
		this.classList.remove('descending');
		displayTable(displayData);
	}
}

// Add event listener
personHeader.addEventListener('click', sortPeople);
