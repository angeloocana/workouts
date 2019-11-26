type Muscle =
  "CalfsGastrocnemius"
| "CalfsSoleus"

| "Quads"
| "Hamstrings"
| "Gluteus"

| "AbsUpper"
| "AbsMiddle"
| "AbsLower"

| "Triceps"
| "Biceps"

|"ChestUpper"
| "ChestMiddle"
| "ChestLower"

| "ShoulderFront"
| "ShoulderSide"
| "ShoulderRear";

enum WorkoutMuscleType {
    /** Primary muscle used in an exercise. eg: Chest for Bench press */
    Primary = "Primary",

    /** Muscle that supports the movement. eg: Shoulder and Triceps for Bench press*/
    Secondary = "Secondary"
}

type MuscleGroup = "Abs" | "Calfs" | "Legs" | "Chest" | "Shoulders";

const muscleGroups: Record<MuscleGroup, Record<WorkoutMuscleType, Muscle[]>> = {
    "Abs": {
       "Primary": ["AbsUpper", "AbsMiddle", "AbsLower"],
       "Secondary": []
    },
    "Calfs": {
       "Primary":["CalfsGastrocnemius", "CalfsSoleus"],
       "Secondary": []
    },
    "Legs": {
       "Primary":["Quads", "Hamstrings", "Gluteus"],
       "Secondary": []
    },
    "Chest": {
       "Primary":["ChestLower", "ChestMiddle", "ChestUpper"],
       "Secondary": ["Triceps"]
    },
    "Shoulders": {
       "Primary":["ShoulderFront", "ShoulderSide", "ShoulderRear"],
       "Secondary": []
    },
};

type Exercise = Partial<Record<Muscle, WorkoutMuscleType>>;

const exercises: Record<string, Exercise> = {
    "Incline dumbbell press": {
        "ChestUpper": WorkoutMuscleType.Primary,
        "ChestMiddle": WorkoutMuscleType.Secondary,
        "ChestLower": WorkoutMuscleType.Secondary,
    }
};

type Workout = {
    muscles: Record<Muscle, WorkoutMuscleType>;
};

type WorkoutPeriod = "Morning" | "Afternoon" | "Night";

type WorkoutPeriods = Partial<Record<WorkoutPeriod, Workout>>;

type Workouts = { [isoDate: string]: WorkoutPeriods };

let workouts: Workouts = {
    "2019-11-25": {
        "Morning": {
            muscles: {
                "ChestUpper": WorkoutMuscleType.Secondary
            }
        }
    }
};

function addWorkout(workouts: Workouts, date: string, workoutPeriods: WorkoutPeriods): Workouts {
    return {
        ...workouts,
        [date]: workoutPeriods 
    };
}

function addMuscleGroup(muscleGroup: MuscleGroup) {
    return {
        muscleGroups[muscleGroup]
    }
}

function addMuscleGroups(muscleGroups: MuscleGroup[]) {

}

workouts = addWorkout(workouts, "2019-11-25", {
    "Morning": {
        muscles: addMuscleGroup("Chest")
    }
});
