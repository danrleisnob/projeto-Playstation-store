import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

	title = 'projeto-playstation-store';

	ngOnInit(): void {
		let lastScrollTop = 0;

		window.addEventListener('scroll', () => {
			const sony = document.querySelector('.sony') as HTMLElement;
			const menuContainer = document.querySelector('.menu-bar__container') as HTMLElement;
			const menuWhite = document.querySelector('.mmenu-white__play') as HTMLElement;

			const scrollTop = window.scrollY || window.pageYOffset;

			// Verifica se a posição atual de rolagem é maior que a anterior
			const isScrollingDown = scrollTop > lastScrollTop;

			// Atualiza a posição anterior de rolagem
			lastScrollTop = scrollTop;

			if (isScrollingDown) {
				// Esconde as classes 'sony' e 'menuWhite' e ajusta a posição da classe 'menu-bar__container'
				if (sony) sony.style.display = 'none';
				if (menuWhite) menuWhite.style.display = 'none';
				menuContainer.style.position = 'fixed';
				menuContainer.style.top = '0';
			} else {
				// Mostra as classes 'sony' e 'menuWhite'
				if (sony) sony.style.display = 'flex';
				if (menuWhite) menuWhite.style.display = 'flex';

				// Verifica se o topo da página está visível
				if (scrollTop === 0) {
					// Retorna o 'menuContainer' para a posição estática apenas se a barra de rolagem estiver no topo
					menuContainer.style.position = 'static';
				}
			}
		});
	}
}
