import static ui.UiMenu.showMenu;
import Doctor;

public class Main {
    public static void main(String[] args) {
        // showMenu();
        Doctor doctor = new Doctor("Anahi", "Pediatria");
        doctor.showName();
    }
}
