"""
Minions Bundle: Knowledge SDK — Type Schemas
Custom MinionType schemas for Minions Bundle: Knowledge.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

class Concept(MinionType):
    """An abstract idea, entity, or topic"""
    slug = "concept"
    icon = "🧠"

    fields = [
        FieldDefinition(name="name", type="str", label="name"),
        FieldDefinition(name="definition", type="str", label="definition"),
        FieldDefinition(name="aliases", type="str", label="aliases"),
    ]


class Document(MinionType):
    """A source of information (article, book, paper)"""
    slug = "document"
    icon = "📄"

    fields = [
        FieldDefinition(name="title", type="str", label="title"),
        FieldDefinition(name="author", type="str", label="author"),
        FieldDefinition(name="url", type="str", label="url"),
        FieldDefinition(name="publishDate", type="str", label="publishDate"),
    ]


class ResearchNote(MinionType):
    """A synthesized atom of knowledge"""
    slug = "researchNote"
    icon = "📝"

    fields = [
        FieldDefinition(name="title", type="str", label="title"),
        FieldDefinition(name="body", type="str", label="body"),
        FieldDefinition(name="tags", type="str", label="tags"),
    ]


class Citation(MinionType):
    """A link between a note/concept and its source document"""
    slug = "citation"
    icon = "🔗"

    fields = [
        FieldDefinition(name="sourceId", type="str", label="sourceId"),
        FieldDefinition(name="targetId", type="str", label="targetId"),
        FieldDefinition(name="targetType", type="str", label="targetType"),
        FieldDefinition(name="pageOrQuote", type="str", label="pageOrQuote"),
    ]


BUNDLE_TYPES = [Concept, Document, ResearchNote, Citation]
