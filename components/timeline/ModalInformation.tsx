import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function ModalInformation(props: {
  isOpen: boolean;
  onClose: () => void;
  company: string;
  position: string;
  description: string;
  icon: string;
  website?: string;
  instagram?: string;
  linkedin?: string;
}) {
  const {
    isOpen,
    onClose,
    company,
    position,
    description,
    icon,
    website,
    instagram,
    linkedin,
  } = props;

  return (
    <Modal
      backdrop={"blur"}
      isOpen={isOpen}
      scrollBehavior={"outside"}
      onClose={onClose}
    >
      <ModalContent>
        <div className="py-4 px-1">
          <ModalHeader className="flex gap-3 items-center">
            <img
              alt={icon}
              className={"w-12"}
              src={`/imgs/timeline/${icon}.webp`}
            />
            <div className={"flex flex-col"}>
              <p className="text-xl">{company}</p>
              <p className="text-sm font-light italic text-gray-700 dark:text-gray-400">
                {position}
              </p>
            </div>
          </ModalHeader>
          <ModalBody>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <div className="flex justify-end gap-4">
              {website ? (
                <a
                  className="cursor-pointer"
                  href={website}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGlobe} size="xl" />
                </a>
              ) : null}
              {instagram ? (
                <a
                  className="cursor-pointer"
                  href={instagram}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </a>
              ) : null}
              {linkedin ? (
                <a
                  className="cursor-pointer"
                  href={linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </a>
              ) : null}
            </div>
          </ModalBody>
        </div>
      </ModalContent>
    </Modal>
  );
}
