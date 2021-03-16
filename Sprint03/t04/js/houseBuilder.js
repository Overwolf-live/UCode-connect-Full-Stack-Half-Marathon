"use strict"

function HouseBlueprint(address, description, owner, size) {
    this.address = address;
    this.description = description;
    this.date = new Date(Date.now());
    this.owner = owner;
    this.size = size;
    this._averageBuildSpeed = 0.5;
    this.getDaysToBuild = function() {
        return this.size * 2;
    }
}

function HouseBuilder(address, description, owner, size, rooms) {
    HouseBlueprint.call(this, address, description, owner, size);
    this.roomCount = rooms;
}
