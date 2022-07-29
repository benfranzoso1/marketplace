export type Vin = {
	Make: string;
	Model: string;
	ModelYear: string;
	FuelTypePrimary: string;
	DriveType: string;
	VIN: string;
};

export async function getVin(vin: string) {
	const response = await fetch(
		`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${vin}?format=json`
	);
	const vin_data = await response.json();
	return vin_data.Results[0];
}
