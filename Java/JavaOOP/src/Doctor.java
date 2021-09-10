public class Doctor {
    int id; // Autoincrement
    String name;
    String speciality;

    Doctor() {
        System.out.println("Construyendo el objeto Doctor");
        id++;
    }

    Doctor(String name, String speciality) {
      this.name = name;
      this.speciality = speciality;
    }

    // Behaviours
    public void showName() {
        System.out.println(name);
    }

    public void showId() {
        System.out.println("ID Doctor: " + id);
    }
}
