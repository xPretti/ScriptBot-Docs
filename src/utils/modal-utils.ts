export class ModalUtils {
  static currentBody: HTMLElement | null = null;
  static currentModal: HTMLElement | null = null;

  private constructor() {}

  public static open(modal: HTMLElement): void {
    if (this.currentModal === modal) {
      return;
    }
    this.close();
    this.currentModal = modal;
    const content = this.build();
    content.appendChild(modal);
  }

  public static close(): void {
    if (this.currentBody) {
      this.currentBody.remove();
      this.currentBody = null;
      this.currentModal = null;
      this.unlock();
    }
  }

  private static build(): HTMLDivElement {
    const container = document.createElement("div");
    container.classList.add("modal-container");
    const modal = document.createElement("div");
    modal.classList.add("modal-content");
    container.appendChild(modal);
    this.currentBody = document.body.appendChild(container);

    this.lock();

    this.attachCloseOutside(container);
    this.attachClose(modal);
    return modal;
  }

  private static attachCloseOutside(container: HTMLDivElement): void {
    container.addEventListener("click", (e) => {
      if (e.target === container) {
        this.close();
      }
    });
  }

  private static attachClose(content: HTMLDivElement): void {
    content.addEventListener("click", (e) => {
      const closeBtn = (e.target as Element).closest(".modal-close-btn");
      if (closeBtn) {
        this.close();
      }
    });
  }

  private static lock() {
    document.body.style.overflow = "hidden";
  }

  private static unlock() {
    document.body.style.overflow = "";
  }
}

// let currentModal: HTMLElement | null;

// export const openModal = () => {
//   closeModal();

//   const overlay = document.createElement("div");
//   overlay.className = "modal-overlay";

//   const modal = document.createElement("div");
//   modal.className = "modalTest";
//   modal.innerHTML = `
//     <div class="modal-content" style="padding: 2rem;">
//       <button id="close-btn">Fechar</button>
//       <h2>dwadawdawdawdadd</h2>
//       <h3>wadawdawd</h3>
//       <p>ddadwdad</p>
//     </div>
//   `;

//   overlay.appendChild(modal);
//   currentModal = document.body.appendChild(overlay);

//   // TRAVA o scroll da página principal
//   document.body.style.overflow = "hidden";

//   // Fecha se clicar fora
//   overlay.addEventListener("click", (e) => {
//     if (e.target === overlay) {
//       closeModal();
//     }
//   });

//   // Fecha no botão
//   modal.querySelector("#close-btn")?.addEventListener("click", () => {
//     closeModal();
//   });
// };

// export const closeModal = () => {
//   if (currentModal) {
//     currentModal.remove();
//     currentModal = null;

//     // DESBLOQUEIA o scroll da página principal
//     document.body.style.overflow = ""; // libera o scroll
//   }
// };

// export const handleModalClick = (event: PointerEvent) => {
//   if (currentModal) {
//     if (currentModal.contains(event.target as Node)) {
//       return;
//     }
//     console.log(event.target);
//     closeModal();
//   }
// };
