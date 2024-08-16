# NanoCaptable

## Abstract

NanoCaptable is an innovative, open-source tool designed to facilitate the equitable division and sharing of equity for nascent projects that are too small and uncertain to justify the creation of formal legal entities such as LLCs. NanoCaptable offers a straightforward yet robust platform for creators to organize and manage cap tables without the need for initial incorporation. This tool is particularly valuable for early-stage ventures where the revenue-generating potential remains unclear. NanoCaptable's unique value proposition lies in its simplicity and open-source nature, empowering creators to focus on innovation and collaboration.

## Introduction

The early stages of project development, particularly within the realms of computer science, economics, and accounting, often necessitate the allocation of equity among contributors. However, the uncertainty surrounding the project's success may not justify the creation of a formal legal entity. NanoCaptable addresses this gap by providing an accessible, open-source solution that enables the creation and management of equity cap tables. This tool allows for the fair and transparent distribution of ownership stakes, fostering trust and cooperation among team members.

The running example can be seen here:

[https://pubinv.github.io/nano-cap-table/](https://pubinv.github.io/nano-cap-table/)

(
   You will not be able to change the table unless you have a github access token to the repo which is serving the github pages.
)

## Features

### Lightweight and Backend-Free

NanoCaptable is designed to be extremely lightweight, requiring no backend infrastructure. The entire application runs on GitHub Pages, making it easy for users to fork the project into their own organization. This approach minimizes setup complexity and enhances accessibility, allowing users to manage their equity cap tables directly from the browser.

### Real-Time Equity Management

Users can make changes to the cap table directly on the site. Any modifications are immediately rendered, ensuring that all stakeholders have access to the most current information. This real-time update feature enhances transparency and ensures that the equity distribution reflects the latest contributions and agreements among team members.

### JSON Export and GitHub Integration

The cap table is displayed alongside a JSON representation of the data, which users can easily copy and store. This feature ensures that the data is portable and can be integrated with other tools and platforms. Additionally, there is an option to automatically save the cap table to GitHub. Users are prompted to enter a valid GitHub access token, eliminating the need for a backend server to handle authentication and storage. This integration streamlines the workflow and ensures that the data is securely stored in a version-controlled environment.

## Future Enhancements

NanoCaptable is a work in progress with several planned enhancements aimed at expanding its functionality and user base:

- **Double Entry Accounting:** Integration of journal and ledger functionalities to support comprehensive accounting needs. This enhancement will allow users to maintain accurate financial records and ensure compliance with standard accounting practices.
- **Multiple Build Configurations:** Support for various user preferences, including:
  - **SQL or NoSQL Databases:** Users can choose their preferred database system to store and manage cap table data.
  - **Containerization:** Support for containerization using tools like Docker, enabling users to deploy NanoCaptable in isolated and reproducible environments.
  - **Cloud Provider Integration:** Options to integrate with cloud providers and backend services, providing scalability and additional features for advanced users.

These enhancements will make NanoCaptable a versatile tool, capable of meeting the diverse needs of its user base.

## Collaboration

This project is developed in collaboration with Public Inventor, a non-profit organization dedicated to the creation of open-source inventions that benefit humanity. Public Inventor's mission aligns with NanoCaptable's goal of providing accessible and equitable tools for project management. This collaboration ensures that NanoCaptable is developed with a focus on public good and open accessibility.

## Usage

To use NanoCapTable, fork the latest release in your personal account or add it to your Github organization. 

## Conclusion

NanoCaptable represents a significant step forward in the democratization of equity management for early-stage projects. Its open-source nature, combined with a lightweight, backend-free design, ensures that it is accessible to a wide range of users. As the platform evolves, it aims to incorporate advanced accounting features and support diverse user preferences, making it an indispensable tool for project creators and contributors. By simplifying the process of equity division and management, NanoCaptable empowers creators to focus on innovation and collaboration, driving the success of their projects.

## License

NanoCaptable is licensed under the GNU Public License.

---

## Appendix

### Technical Specifications

- **Technology Stack:** NanoCaptable is built using HTML, CSS, and JavaScript, leveraging GitHub Pages for hosting.
- **Data Storage:** The cap table data is stored as JSON and can be exported or saved directly to GitHub.
- **User Authentication:** Users are prompted to enter a GitHub access token for saving data, eliminating the need for a backend server.

### Contributions

We welcome contributions from the community. If you would like to contribute to NanoCaptable, please follow the guidelines provided in our [CONTRIBUTING.md](https://github.com/your-repo-url/CONTRIBUTING.md).

### Contact Information

For questions, suggestions, or support, please contact me at [shah.prajwal99@gmail.com](mailto:shah.prajwal@gmail.com?Subject=Nano_Cap_Table).

