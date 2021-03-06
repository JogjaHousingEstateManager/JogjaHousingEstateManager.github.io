/*
 *
 * Copyright 2019 Dtji Psimfans (Admin and creator of "Global App Developers @ Jogja" Facebook group)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
*/

var upgrades = [ // name, description, amount, coinCost, IDRCost, mCubeCost, kWhCost, workerCost, visitorCost, emptySpaceCost, specialCoinCost, changeName, changeValue, requirements, unlocked
  
];

function Upgrade(name, description, amount, coinCost, IDRCost, mCubeCost, kWhCost, workerCost, visitorCost, emptySpaceCost, specialCoinCost, changeName, changeValue, requirements, unlocked){
    this.name = name;
    this.description = description;
    this.amount = amount;
    this.coinCost = coinCost;
    this.IDRCost = IDRCost;
    this.mCubeCost = mCubeCost;
    this.kWhCost = kWhCost;
    this.workerCost = workerCost;
    this.visitorCost = visitorCost;
    this.emptySpaceCost = emptySpaceCost;
    this.specialCoinCost = specialCoinCost;
    this.changeName = changeName;
    this.changeValue = changeValue;
    this.requirements = requirements;
    this.unlocked = unlocked;
};
