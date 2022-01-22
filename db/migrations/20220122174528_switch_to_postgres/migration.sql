-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('RESET_PASSWORD');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT,
    "role" TEXT NOT NULL DEFAULT E'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3),
    "handle" TEXT NOT NULL,
    "hashedSessionToken" TEXT,
    "antiCSRFToken" TEXT,
    "publicData" TEXT,
    "privateData" TEXT,
    "userId" INTEGER,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Token" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "hashedToken" TEXT NOT NULL,
    "type" "TokenType" NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "sentTo" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "age" INTEGER NOT NULL,
    "socialNumber" INTEGER NOT NULL,
    "sex" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "homePhone" INTEGER,
    "mobilePhone" INTEGER,
    "carrier" TEXT,
    "enableTextCommunication" BOOLEAN NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "employer" TEXT NOT NULL,
    "workPhone" TEXT,
    "spouseName" TEXT,
    "spouseOccupation" TEXT,
    "spouseEmployer" TEXT,
    "emergencyContactName" TEXT NOT NULL,
    "emergencyContactNumber" INTEGER NOT NULL,
    "emergencyContactRelationship" TEXT NOT NULL,
    "doYouHaveInsurance" BOOLEAN NOT NULL,
    "insurancePolicyHolder" TEXT,
    "policyHolderBirthdate" TIMESTAMP(3),
    "relationshipToPolicyHolder" TEXT,
    "anyDependentsCovered" BOOLEAN NOT NULL,
    "restrictedActivity" TEXT,
    "currentActivityLevel" TEXT,
    "usualActivityLevel" TEXT,
    "injuryBecauseOfAccident" BOOLEAN NOT NULL,
    "injuryToSpine" TEXT,
    "haveSufferedInPast" BOOLEAN NOT NULL,
    "sufferedInPastCount" INTEGER,
    "howDidInjuryHappen" TEXT,
    "otherFormOfTreatment" BOOLEAN NOT NULL,
    "whatTypeOfTreatment" TEXT,
    "whoProvidedTreatment" TEXT,
    "whenWasTreatment" TEXT,
    "resultsOfTreatmenet" TEXT,
    "unfavorableReason" TEXT,
    "stressfulJobs" TEXT,
    "conditionBrokenBone" TEXT,
    "conditionDislocation" TEXT,
    "conditionTumors" TEXT,
    "conditionRheumatoidArthritis" TEXT,
    "conditionFracture" TEXT,
    "conditionDisability" TEXT,
    "conditionCancer" TEXT,
    "conditionHeartAttack" TEXT,
    "conditionOsteoArthritis" TEXT,
    "conditionDiabetes" TEXT,
    "conditionCerebralVascular" TEXT,
    "conditionOtherSeriousConditions" TEXT,
    "familyMemberSufferWithSameCondition" BOOLEAN NOT NULL,
    "familyMemberWithSameCondition" TEXT,
    "familyMemberEverBeenTreated" BOOLEAN NOT NULL,
    "hereditaryConditions" TEXT NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dependent" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "relationship" TEXT NOT NULL,
    "applicationId" INTEGER NOT NULL,

    CONSTRAINT "Dependent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReasonForVisit" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "painLevel" INTEGER NOT NULL,
    "whenProblemStart" TIMESTAMP(3) NOT NULL,
    "whenProblemAtWorst" TEXT NOT NULL,
    "howLongDoesProblemLast" TEXT NOT NULL,
    "howDidInjuryHappen" TEXT NOT NULL,
    "injuryEverBeenTreated" BOOLEAN NOT NULL,
    "whereInjuryWasTreated" TEXT,
    "whenWasInjuryWasTreated" TIMESTAMP(3),
    "howLongWereYouTreatedFor" TEXT,
    "treatedResults" TEXT,
    "previousChiropractorName" TEXT,
    "symptoms" TEXT NOT NULL,
    "symptomsArea" TEXT NOT NULL,
    "whatRelievesSymptom" TEXT NOT NULL,
    "whatMakeSymptomWorse" TEXT NOT NULL,
    "applicationId" INTEGER NOT NULL,

    CONSTRAINT "ReasonForVisit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Condition" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "howLongAgo" TEXT NOT NULL,
    "typeOfCareReceived" TEXT NOT NULL,
    "byWhom" TEXT NOT NULL,
    "applicationId" INTEGER NOT NULL,

    CONSTRAINT "Condition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Smoking" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "howOften" TEXT NOT NULL,
    "applicationId" INTEGER NOT NULL,

    CONSTRAINT "Smoking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlcoholicBeverage" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "consumption" TEXT NOT NULL,
    "applicationId" INTEGER NOT NULL,

    CONSTRAINT "AlcoholicBeverage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecreationalDrugs" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "consumption" TEXT NOT NULL,
    "applicationId" INTEGER NOT NULL,

    CONSTRAINT "RecreationalDrugs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session_handle_key" ON "Session"("handle");

-- CreateIndex
CREATE UNIQUE INDEX "Token_hashedToken_type_key" ON "Token"("hashedToken", "type");

-- CreateIndex
CREATE UNIQUE INDEX "Smoking_applicationId_key" ON "Smoking"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "AlcoholicBeverage_applicationId_key" ON "AlcoholicBeverage"("applicationId");

-- CreateIndex
CREATE UNIQUE INDEX "RecreationalDrugs_applicationId_key" ON "RecreationalDrugs"("applicationId");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dependent" ADD CONSTRAINT "Dependent_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReasonForVisit" ADD CONSTRAINT "ReasonForVisit_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Condition" ADD CONSTRAINT "Condition_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Smoking" ADD CONSTRAINT "Smoking_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlcoholicBeverage" ADD CONSTRAINT "AlcoholicBeverage_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecreationalDrugs" ADD CONSTRAINT "RecreationalDrugs_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
