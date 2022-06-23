package main

import "fmt"

func main() {
	// fmt package
	nombre := "Platzi"
	cursos := 500

	// Println
	fmt.Println(nombre)

	// Printf
	fmt.Printf("%s tiene mas de %d cursos\n", nombre, cursos)

	// Sprintf
	message := fmt.Sprintf("%s tiene mas de %d cursos", nombre, cursos)
	fmt.Println(message)
}
