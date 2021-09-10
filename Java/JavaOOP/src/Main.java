import static ui.UiMenu.showMenu;

public class Main {
    public static void main(String[] args) {
        // showMenu();
        Doctor doctor = new Doctor("Anahi", "Pediatria");
        doctor.showName();

        Patient patient = new Patient("Alejandra", "aleja@gmail.com");
    }
}
