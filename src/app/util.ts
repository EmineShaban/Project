import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    // if (control.errors && Object.keys(control.errors).filter(errorName => errorName !== 'email').length > 0) {
    //     return null;
    // }

    if (!value) {
        return null
    }

    if (!/.{6,}@gmail\.(bg|com)/.test(value)) {
        return {
            email: true,
        }
    }
    return null;
}



export function passwordMatch(passwordFormControl: AbstractControl) {
    const validtorFn: ValidatorFn = (rePasswordFormControl: AbstractControl) => {
        if (passwordFormControl.value !== rePasswordFormControl.value) {
            return {
                passwordMissmatch: true
            }
        }

        return null;
    }

    return validtorFn;
}


export function urlValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
console.log(value)
    if (!value) {
        return null
    }
    console.log(/https?:\/\/.+/.test(value))

    if (!/https?:\/\/.+/.test(value)) {
        console.log(/https?:\/\/.+/.test(value))

        return {
            
            email: true,
        }
    }
    return null;
}