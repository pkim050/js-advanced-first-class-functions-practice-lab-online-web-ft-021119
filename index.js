// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function(element) {
    console.log(element.name);
  });
};

const logDriversByHometown = function (drivers, hometown) {
  drivers.forEach(function(element) {
    if (element.hometown === hometown) {
      console.log(element.name);
    }
  });
};

const driversByRevenue = function (drivers) {
  const newDrivers = [...drivers]; //Non-destructive way
  newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
  return newDrivers;
};

const driversByName = function (drivers) {
  const newDrivers = [...drivers];
  newDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return newDrivers;
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function(total, element) {
    return total += element.revenue;
  }, 0);
};


const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
