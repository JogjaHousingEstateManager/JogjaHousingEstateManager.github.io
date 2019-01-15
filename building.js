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

var buildings = [ // name, description, amount, coinCost, IDRCost, mCubeCost, kWhCost, workerCost, visitorCost, emptySpaceCost, specialCoinCost, coinProductionRate, IDRProductionRate, mCubeProductionRate, kWhProductionRate, workerProductionRate, visitorProductionRate, emptySpaceProductionRate, specialCoinProductionRate, actualCoinProductionRate, actualIDRProductionRate, actualmCubeProductionRate, actualkWhProductionRate, actualWorkerProductionRate, actualVisitorProductionRate, actualEmptySpaceProductionRate, actualSpecialCoinProductionRate, requirements, unlocked
    new Building("Reservoir", "Building to increase yield of water and electricity.", new Decimal(0), new Decimal(10000000), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(10000), new Decimal(10000), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), null, true),
    new Building("Money Making Machine", "Building to make Indonesian Rupiahs from coins.", new Decimal(0), new Decimal(10000000), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(10000), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), null, true),
    new Building("Wonolelo Jogja Hills (Level 1)", "A housing estate in Wonolelo village, Pleret, Bantul Regency (Level 1).", new Decimal(0), new Decimal(50000), new Decimal(5000), new Decimal(100), new Decimal(10), new Decimal(1), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(5000), new Decimal(0), new Decimal(-10), new Decimal(-1), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), null, true),
    new Building("Griya Ploso Asri (Level 1)", "A housing estate developed by Parahyangan Abadi Land in Sentolo, Kulon Progo Regency (Level 1).", new Decimal(0), new Decimal(5e9), new Decimal(5e7), new Decimal(1000), new Decimal(100), new Decimal(10), new Decimal(1), new Decimal(0), new Decimal(0), new Decimal(5e6), new Decimal(0), new Decimal(-100), new Decimal(-10), new Decimal(1), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), null, false),
    new Building("Pal Gading Regency (Level 1)", "A housing estate developed by Property Syariah near Wonosari (capital of Gunungkidul Regency) (Level 1).", ),
    new Building("Griya Bangun Permai (Level 1)", ),
    new Building("Griya Argatama Step 2 (Level 1)", ),
    new Building("Puri Surya Bangunjiwo 1 (Level 1)", ),
    new Building("Citra Wonosari (Level 1)", ),
    new Building("The Mountain (Level 1)", ),
];

function Building(name, description, amount, coinCost, IDRCost, mCubeCost, kWhCost, workerCost, visitorCost, emptySpaceCost, specialCoinCost, coinProductionRate, IDRProductionRate, mCubeProductionRate, kWhProductionRate, workerProductionRate, visitorProductionRate, emptySpaceProductionRate, specialCoinProductionRate, actualCoinProductionRate, actualIDRProductionRate, actualmCubeProductionRate, actualkWhProductionRate, actualWorkerProductionRate, actualVisitorProductionRate, actualEmptySpaceProductionRate, actualSpecialCoinProductionRate, requirements, unlocked){
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
    this.coinProductionRate = coinProductionRate;
    this.IDRProductionRate = IDRProductionRate;
    this.mCubeProductionRate = mCubeProductionRate;
    this.kWhProductionRate = kWhProductionRate;
    this.workerProductionRate = workerProductionRate;
    this.visitorProductionRate = visitorProductionRate;
    this.emptySpaceProductionRate = emptySpaceProductionRate;
    this.specialCoinProductionRate = specialCoinProductionRate;
    this.actualCoinProductionRate = actualCoinProductionRate;
    this.actualIDRProductionRate = actualIDRProductionRate;
    this.actualmCubeProductionRate = actualmCubeProductionRate;
    this.actualkWhProductionRate = actualkWhProductionRate;
    this.actualWorkerProductionRate = actualWorkerProductionRate;
    this.actualVisitorProductionRate = actualVisitorProductionRate;
    this.actualEmptySpaceProductionRate = actualEmptySpaceProductionRate;
    this.actualSpecialCoinProductionRate = actualSpecialCoinProductionRate;
    this.requirements = requirements;
    this.unlocked = unlocked;
};
