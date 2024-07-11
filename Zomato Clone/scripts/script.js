// Remember this way of appending options to the datalist , by creating option element and traversing data via foreach loop


document.addEventListener('DOMContentLoaded', () => {
  const dataList = document.getElementById('location-options');

  const cities = [
      { name: "New York", country: "USA" },
      { name: "Los Angeles", country: "USA" },
      { name: "Chicago", country: "USA" },
      { name: "Houston", country: "USA" },
      { name: "Phoenix", country: "USA" },
      { name: "Philadelphia", country: "USA" },
      { name: "San Antonio", country: "USA" },
      { name: "San Diego", country: "USA" },
      { name: "Dallas", country: "USA" },
      { name: "San Jose", country: "USA" },
      { name: "London", country: "UK" },
      { name: "Birmingham", country: "UK" },
      { name: "Leeds", country: "UK" },
      { name: "Glasgow", country: "UK" },
      { name: "Sheffield", country: "UK" },
      { name: "Manchester", country: "UK" },
      { name: "Edinburgh", country: "UK" },
      { name: "Liverpool", country: "UK" },
      { name: "Bristol", country: "UK" },
      { name: "Cardiff", country: "UK" },
      { name: "Sydney", country: "Australia" },
      { name: "Melbourne", country: "Australia" },
      { name: "Brisbane", country: "Australia" },
      { name: "Perth", country: "Australia" },
      { name: "Adelaide", country: "Australia" },
      { name: "Gold Coast", country: "Australia" },
      { name: "Canberra", country: "Australia" },
      { name: "Newcastle", country: "Australia" },
      { name: "Wollongong", country: "Australia" },
      { name: "Logan City", country: "Australia" },
      { name: "Tokyo", country: "Japan" },
      { name: "Yokohama", country: "Japan" },
      { name: "Osaka", country: "Japan" },
      { name: "Nagoya", country: "Japan" },
      { name: "Sapporo", country: "Japan" },
      { name: "Fukuoka", country: "Japan" },
      { name: "Kobe", country: "Japan" },
      { name: "Kyoto", country: "Japan" },
      { name: "Kawasaki", country: "Japan" },
      { name: "Saitama", country: "Japan" }
  ];

  cities.forEach(city => {
      const option = document.createElement('option');
      option.value = city.name;
      dataList.appendChild(option);
  });
  console.log('City options added to datalist');
});
